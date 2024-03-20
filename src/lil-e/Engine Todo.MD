# Game engine setup

- features
  - typescript
  - 2d game engine

### requirements
-[ ] should have  
  -[ ] canvas setup method  
  -[ ] hooks  
    -[ ] init   
      -[ ] load assets  
      -[ ] setup canvas  
      -[ ] gameloop  
  -[ ] physics  
    -[ ] space (space / arcade physics, 0 gravity)  
    -[ ] earth (earth physics)  
    -[ ] custom (custom physics by entering variables (gravity etc))  
  -[ ] something to setup backgrounds  
    -[ ] something to create parallax with (bg layers with options)  
    -[ ] define an area with coordinates that signify the viewport of the game  
      -[ ] for instance a map can be huge, but doesn't need to be rendered all the time  
        so only render / lazy load the assets that are in and around the current viewport  
    -[ ] a sprite system to animate images with  
  -[ ] a level editor / tile editor (run in seperate path /tile-editor or something)  
  -[ ] fps settings  
    -[ ] i would like to include animate / cartoon type animation so it would be   
      like 24 fps and animation on the 2's, not sure how to do that yet  
    -[ ] custom fps (but never limitless)  
  -[ ] input  
    -[ ] keyboard  
    -[ ] mouse  
    -[ ] controller  
  -[ ] Audio  
    -[ ] audio for characters  
    -[ ] background music (score)  
  -[ ] Something of a GUI system   
    -[ ] menu's  
    -[ ] fixed interface gui elements (health, map etc)  
    -[ ] modal system  
  -[ ] State management  
  -[ ] Camera system  
  -[ ] Particle system  
  -[ ] Collission detection and response  
  -[ ] Path finding   
  -[ ] Enemy AI  
  -[ ] Data storage  
    -[ ] serilization / deserilization (storing and retreiving save data)  
      -[ ] local storage / cookies / file storage (save/load)  
      -[ ] http storage (backend)  
  -[ ] Game event system  
    -[ ] create events that other entitites can subscribe to  
  -[ ] Advanced asset management  
    -[ ] loading, creating and unloading of assets  
  -[ ] A player inventory system  
  -[ ] Character system  
    -[ ] player self  
      -[ ] singular  
      -[ ] multiple  
        -[ ] switch character to self  
    -[ ] friendlies (npc)  
    -[ ] enemies  
  
