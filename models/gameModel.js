import mongoose from "mongoose";
import { userSchema } from "./userModel.js";

const DrawingSchema = new mongoose.Schema({
    strokes: [{
        points: [{
            x: Number,
            y: Number
        }],
        color: String,
        brushSize: Number
    }],
    canvasWidth: Number,
    canvasHeight: Number,
    backgroundColor: String
}, { _id: false, timestamps: false, versionKey: false });


const ChatMessageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isGuess: {
        type: Boolean,
        default: false
    },
    isCorrectGuess: {
        type: Boolean,
        default: false
    }
}, { _id: false, timestamps: true, versionKey: false });


const RoundSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true
    },
    drawer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    drawing: DrawingSchema,
    startTime: {
        type: Date,
        default: Date.now
    },
    endTime: Date,
    messages: [ChatMessageSchema],
    winner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { _id: false, timestamps: true, versionKey: false });


const GameSchema = new mongoose.Schema({
    roomCode: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    players: [
        userSchema
    ],
    rounds: [
        RoundSchema
    ],
    currentRound: {
        type: Number,
        default: 0
    },
    customWords: [{
        type: String
    }],
    gameState: {
        type: String,
        enum: ['waiting', 'drawing', 'guessing', 'round-end', 'game-over'],
        default: 'waiting'
    },
    startedAt: Date,
    endedAt: Date,
    settings: {
        maxPlayers: {
            type: Number,
            default: 8
        },
        maxRounds: {
            type: Number,
            default: 3
        },
        timePerRound: {
            type: Number,
            default: 80
        },
        allowCustomWords: {
            type: Boolean,
            default: false
        },
        maxWordLength: {
            type: Number,
            default: 12
        },
        minWordLength: {
            type: Number,
            default: 3
        }
    }
}, { timestamps: true, versionKey: false });

const Game = mongoose.model('Game', GameSchema);
export default Game;