


/// <reference path="../node_modules/excalibur/dist/excalibur.d.ts" />;

import { Actor, CollisionType, Color, Engine } from 'excalibur';

const game = new Engine({
    width: 800,
    height: 600
});

game.backgroundColor = Color.Azure;

const rect = new Actor({
    x: 150,
    y: game.drawHeight - 40,
    width: 200,
    height: 20
})

rect.color = Color.Cyan;

game.add(rect);

game.start();

