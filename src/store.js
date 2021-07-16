import { writable } from "svelte/store";
import { getTodos } from "./getTodos";

export const todos = writable(getTodos());
