const fs = require('fs');
const ATTEMPT_FILE = '.test_attempt';
let attempt = 1;

if (fs.existsSync(ATTEMPT_FILE)) {
    attempt = parseInt(fs.readFileSync(ATTEMPT_FILE, 'utf8')) + 1;
}
fs.writeFileSync(ATTEMPT_FILE, attempt.toString());
console.log(`Running test... Attempt #${attempt}`);

// Simulate flakiness: Fail on attempt 1, pass on attempt 2
if (attempt === 1) {
    console.error("Test failed unexpectedly!");
    process.exit(1);
} else {
    console.log("Test passed on retry!");
    process.exit(0);
}