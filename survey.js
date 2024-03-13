const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question(
        'Which meal is your favourite (eg: dinner, brunch, etc.) ',
        (meal) => {
          rl.question(
            "What's your favourite thing to eat for that meal? ",
            (food) => {
              rl.question(
                'Which sport is your absolute favourite? ',
                (sport) => {
                  rl.question(
                    'What is your superpower? In a few words, tell us what you are amazing at! ',
                    (superpower) => {
                      // TODO: Log the answer in a database
                      console.log(`
                      ${name} likes listening to ${music} whilst ${activity}.  
                      Their favourite food is ${food} for ${meal}.  ${sport} is
                      their favourite sport, and their superpower is ${superpower}.
                      `);
                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
