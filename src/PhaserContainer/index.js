import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

function PhaserContainer(props) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    setGame(new Phaser.Game(config));
  }, []);

  return <div />;
}

PhaserContainer.propTypes = {};

export default PhaserContainer;

function preload() {
  // this.load.setBaseURL("./assets/");
  console.log(process.env.PUBLIC_URL);
  this.load.image("sky", "assets/images/sky.png");
  this.load.spritesheet("dude", "assets/images/dude.png", {
    frameWidth: 32,
    frameHeight: 48
  });
}

function create() {
  this.add.text(100, 100, "Hello Phaser!", { fill: "#0f0" });
  this.add.image(400, 300, "sky");
  this.add.image(200, 200, "dude");
}
