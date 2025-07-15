import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useGameContext from '../contexts/useGameContext';
import { set } from 'mongoose';

const useCreateGame = () => {

    const [loading, setLoading] = useState(false);
    const {setGameData} = useGameContext();

    const createGame = async (inputs) => {

        setLoading(true);

        try {

            const success = handleInputs(inputs);
            if (!success) return;

            const res = await fetch('http://localhost:5000/api/game/create', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(inputs),
                credentials: 'include'
            })

            const data = await res.json();

            if(data.responseStatus === "error" || data.responseStatus === "failure") {
                throw new Error(data.message);
            }

            localStorage.setItem("gameData", JSON.stringify(data.game));

            setGameData(data.game);

        } catch (error) {
            toast.error("Failed to create game! " + error.message);
        } finally {
            setLoading(false);
        }
    }

    return { createGame, loading };
}

function handleInputs(inputs) {
    if (!inputs.username.match(/^[A-Za-z][A-Za-z0-9\-]*$/)) {
        toast.error("Username should start with a letter and can only contain letters, numbers, and dashes.");
        return false;
    }

    if (inputs.username.length < 3 || inputs.username.length > 30) {
        toast.error("Username must be between 3 and 30 characters.");
        return false;
    }

    if (inputs.settings.maxPlayers < 2 || inputs.settings.maxPlayers > 10) {
        toast.error("Maximum players must be between 2 and 10.");
        return false;
    }

    if (inputs.settings.maxRounds < 1 || inputs.settings.maxRounds > 10) {
        toast.error("Maximum rounds must be between 1 and 10.");
        return false;
    }

    if (inputs.settings.timePerRound < 30 || inputs.settings.timePerRound > 300) {
        toast.error("Time per round must be between 30 and 300 seconds.");
        return false;
    }

    return true;
}

export default useCreateGame