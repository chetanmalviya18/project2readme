#!/usr/bin/env node

/**
 * CLI Entrypoint Executable
 * 
 * The shebang line (#!/usr/bin/env node) at the top tells Unix/Linux/macOS shells 
 * to execute this script using the Node.js binary. On Windows, npm creates a helper 
 * .cmd/.ps1 script automatically linking to this file.
 */

// Import the main CLI orchestrator
import '../dist/bin/index.js';
