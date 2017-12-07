"use strict";

import { parse } from "textlint-plugin-html/lib/html-to-ast";
import { parse_yaml } from "./yaml-to-ast";

export default class RailsProcessor {
    constructor(config) {
        this.config = config;
    }

    static availableExtensions() {
        return [
            ".erb",
            ".yml",
            ".yaml"
        ];
    }

    processor(ext) {
        return {
            preProcess(text, filePath) {
                if (filePath.endsWith(".html.erb")) return parse(text);
                if (filePath.endsWith(".yml") || filePath.endsWith(".yaml")) return parse_yaml(text);
                return parse('');
            },
            postProcess(messages, filePath) {
                let fileType = "<erb>";
                if (filePath.endsWith(".yml")) fileType = "<yaml>";
                return {
                    messages,
                    filePath: filePath ? filePath : fileType
                };
            }
        };
    }
}
