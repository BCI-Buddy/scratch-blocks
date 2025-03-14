/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
goog.provide('Blockly.Blocks.BCI');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');


Blockly.Blocks['connect_to_amp'] = {
  /**
   * Block to connect to amplifier.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONNECT_TO_AMP,
      "args0": [
        {
          "type": "input_value",
          "name": "Amplifier"
        }
      ],
      "category": Blockly.Categories.BCI,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['visualize_signals'] = {
  /**
   * Block to connect to amplifier.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.VISUALIZE_SIGNALS,
      "args0":[
        {
        "type": "field_dropdown",
        "name": "Figures",
        "options": [
          [ "first item", "Figure1" ],
          [ "second item", "Figure2" ]
        ]
        }
      ],
      "category": Blockly.Categories.BCI,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['classify_signals'] = {
  /**
   * Block to connect to amplifier.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CLASSIFY_SIGNALS,
      "args0": [
        {
          "type": "input_value",
          "name": "Amplifier"
        }
      ],
      "category": Blockly.Categories.BCI,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};

Blockly.Blocks['make_buddy_dance'] = {
  /**
   * Block to connect to amplifier.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.MAKE_BUDDY_DANCE,
      "args0": [
        {
          "type": "input_value",
          "name": "Amplifier"
        }
      ],
      "category": Blockly.Categories.BCI,
      "extensions": ["colours_motion", "shape_statement"]
    });
  }
};
