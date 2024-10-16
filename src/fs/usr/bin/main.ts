import { NS } from "@ns";
import { getServers } from "fs/usr/lib/servers";

/** @param {NS} ns */
export async function main(ns: NS) {
  const servers = getServers(ns);
  console.log(servers);
}
