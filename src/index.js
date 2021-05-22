import { usePluginRegister } from "phroper-admin";
import plugin from "./plugin";

export default function Plugin() {
  usePluginRegister(plugin);
  return null;
}
