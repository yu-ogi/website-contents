import { mkdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";
import { compress } from "./compress";
import { listGameJsonDirs } from "./listGameJsonDirs";

const rootDir = resolve();
const contentsDir = join(rootDir, "contents");
const distDir = join(rootDir, "dist");
const ignore = ["**/__reftest/**"];

try {
	await mkdir(distDir, { recursive: true });
	const directories = await listGameJsonDirs(rootDir, contentsDir);

	for (const directory of directories) {
		const filename = relative(contentsDir, directory).split("/").join("-") + ".zip";
		const dist = join(distDir, filename);

		console.log(`compress ${directory} to ${filename}`);
		await compress(directory, dist, ignore);
	}

	console.log("complete successfully");
} catch (error) {
	console.error(error);
	process.exitCode = 1;
}
