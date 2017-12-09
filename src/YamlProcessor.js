"use strict";

import { parse_yaml } from "./yaml-to-ast";

export default class YamlProcessor {
    constructor(config) {
        this.config = config;
    }

    static availableExtensions() {
        return [
            ".yml",
            ".yaml"
        ];
    }

    processor(ext) {
        return {
            preProcess(text, filePath) {
                return parse_yaml(text);
            },
            postProcess(messages, filePath) {
                return {
                    messages,
                    filePath: filePath ? filePath : "<yaml>"
                };
            }
        };
    }
}
