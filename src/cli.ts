#!/usr/bin/env node

import { Command } from "commander";
import { version } from "./index.js";

const program = new Command();

program
  .name("mem")
  .description("Memora CLI")
  .version(version);

program.parse();
