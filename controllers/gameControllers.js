import Randomstring from "randomstring";

import { User } from "../models/userModel.js";
import Game from "../models/gameModel.js";


export const createGame = async (req, res) => {
    const { username, avatar, settings } = req.body;

    if (!username || !avatar || !settings) {
        return res.status(400).json({
            responseStatus: "error",
            responseCode: 400,
            message: "Username, avatar, and settings are required"
        });
    }

    try {

        const user = new User({ username, avatar });
        await user.save();

        const roomCode = Randomstring.generate({
            length: 8,
            charset: "alphanumeric"
        });

        const game = new Game({
            roomCode,
            players: [user],
            settings: {
                maxPlayers: settings.maxPlayers || 10,
                maxRounds: settings.maxRounds || 3,
                timePerRound: settings.timePerRound || 60,
                allowCustomWords: settings.allowCustomWords || false
            },
            customWords: settings.customWords || [],
            startedAt: new Date(),
            gameState: 'waiting',
            endDate: new Date(Date.now() + (3 * 60 * 60 * 1000))
        });
        await game.save();

        res.status(200).json({
            responseStatus: "success",
            responseCode: 200,
            message: `Player ${username} created game ${roomCode}`,
            game
        });
    } catch (error) {
        console.error("Error starting game:", error);
        res.status(500).json({
            responseStatus: "error",
            responseCode: 500,
            message: "Internal server error"
        });
    }
};

export const joinGame = async (req, res) => {
    const { roomCode, username, avatar } = req.body;

    if (!roomCode || !username || !avatar) {
        return res.status(400).json({
            responseStatus: "error",
            responseCode: 400,
            message: "Room code, username, and avatar are required"
        });
    }

    try {
        const game = await Game.findOne({ roomCode });

        if (!game) {
            return res.status(404).json({
                responseStatus: "error",
                responseCode: 404,
                message: "Game not found"
            });
        }

        if (game.players.length >= game.settings.maxPlayers) {
            return res.status(400).json({
                responseStatus: "error",
                responseCode: 400,
                message: "Game room is full"
            });
        }

        const checkUsername = await User.findOne({ username });
        if (checkUsername) {
            return res.status(400).json({
                responseStatus: "error",
                responseCode: 400,
                message: "Username already exists"
            });
        }

        const user = new User({ username, avatar });
        await user.save();

        game.players.push(user);
        await game.save();

        res.status(200).json({
            responseStatus: "success",
            responseCode: 200,
            message: `Player ${username} joined game ${roomCode}`,
            game
        });
    } catch (error) {
        console.error("Error joining game:", error);
        res.status(500).json({
            responseStatus: "error",
            responseCode: 500,
            message: "Internal server error"
        });
    }
}