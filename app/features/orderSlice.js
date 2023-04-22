import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "../../utils/utils";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    players: [],
  },
  reducers: {
    addPlayer: (state, action) => {
      state.players.push(action.payload);
    },
    removePlayer: (state, action) => {
      state.players.splice(action.payload, 1);
    },
    shufflePlayers: (state, action) => {
      state.players = shuffle(state.players);
    },
  },
});

export const { shufflePlayers, addPlayer, removePlayer } = orderSlice.actions;

export const selectPlayers = (state) => state.order.players;

export const selectPlayersCount = (state) => state.order.players.length;

export default orderSlice.reducer;
