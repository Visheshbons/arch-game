# Arch Linux Simulator

A game where you install Arch Linux.

My first ever game btw :)

## File structure
```
arch/
├── package.json
├── electron.js                    # window manager
└── src/
    ├── index.js                    # controller loop
    ├── engine/
    │   ├── gameState.js           # player progress and game state
    │   ├── vfs.js                 # /dev, /etc, /mnt, etc.
    │   ├── parser.js              # literally bash but worse
    │   └── commands.js            # commands to functions
    ├── data/
    │   ├── packages.json          # arch packages (base, linux, grub, etc.)
    │   └── errors.json            # crasher
    └── renderer/
        ├── index.html             # ui
        ├── styles.css             # also ui
        └── renderer.js            # still ui
```

## Design

### Visual

a tui except i need to html it

### Gameplay

u install arch

different difficulty modes
- ez mode shows u what u need to do and has explained errors
- realistic mode copies the errors and stuff from actual arch
- hard mode is headless (blind)

## Code

too lazy to build vm and thatll defeat the point so yea \
literally nothing yet \
need to plan \
look at something that isn't the fourth commit u psychopath

### AI usage

AI was used in deveopment in the form of Github Copilot Autocomplete.

# IMPORTANT

I use arch btw :)