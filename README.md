# Mastermind Letters
Ths game is a version of
[Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)),
but with letters. Mastermind is inspired by the much earlier [Bulls
and cows](https://en.wikipedia.org/wiki/Bulls_and_cows), which has a
digit-version (much like Mastermind), and a letter-version, which
traditionally works like this:

- One player (the host) thinks of an isogram word (i.e. no letter
  appears twice) and, if the word length is not pre-determined,
  announces the number of letters in the word.
- Other players (the guessers) try to figure out that word by guessing
  isogram words containing the same number of letters.
- The host responds with the number of cows and bulls for each guessed
  word. As with the digit version, "cow" means a letter in the wrong
  position and "bull" means a letter in the right position.

In order to create a one-player game, in this version the host is the
website, and a random word is chosen each day. Additionally, since a
computer can think quickly, the word is not necessarily an isogram
word - `beget` would be a valid word.


## Running locally
_To Run Locally:_
Clone the repository and perform the following command line actions:

```bash
$ cd game
$ npm install
$ npm run start
```

open http://localhost:3000 in browser.

## Running via docker

_To build/run docker container:_

```bash
$ docker build -t game .
$ docker run -d -p 3000:3000 game
```


## Creating a version in a different language
- Update the title, the description, and the "You need to enable JavaScript" message in `public/index.html`
- Update the language attribute in the HTML tag in `public/index.html`
- Update the name and short name in `public/manifest.json`
- Update the strings in `src/constants/strings.ts`
- Add all of the five letter words in the language to `src/constants/validGuesses.ts`, replacing the English words
- Add a list of goal words in the language to `src/constants/wordlist.ts`, replacing the English words
- Update the "About" modal in `src/components/modals/AboutModel.tsx`
- Update the "Info" modal in `src/components/modals/InfoModal.tsx`
- If the language has letters that are not present in English, add them to the `CharValue` type in `src/lib/statuses.ts` and update the keyboard in `src/lib/components/keyboard/Keyboard.tsx`
- If the language's letters are made of multiple unicode characters, use a grapheme splitter at various points throughout the app or normalize the input so that all of the letters are made of a single character
- If the language is written right-to-left, add `dir="rtl"` to the HTML tag in `public/index.html` and prepend `\u202E` (the unicode right-to-left override character) to the return statement of the inner function in `generateEmojiGrid` in `src/lib/share.ts`

## Credits
Thanks Hannah!
