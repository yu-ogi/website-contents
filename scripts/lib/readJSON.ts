import { readFile } from "node:fs/promises";

export async function readJSON<T>(path: string): Promise<T> {
	return JSON.parse(await readFile(new URL(path, import.meta.url), { encoding: "utf-8" }));
}
