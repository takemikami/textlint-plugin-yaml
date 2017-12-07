"use strict";
import { load } from "yaml-ast-parser";
import traverse from "traverse";
import StructuredSource from "structured-source";

function yamlnode_to_lintnode(src, yaml, node) {
  if (typeof(node) == "object" && node != null && node.startPosition >= 0 && node.endPosition >= 0) {
    let posStart = src.indexToPosition(node.startPosition);
    let posEnd = src.indexToPosition(node.endPosition);
    let positionCompensated = {
      start: {line: posStart.line, column: posStart.column},
      end: {line: posEnd.line, column: posEnd.column}
    }
    let range = src.locationToRange(positionCompensated);
    let value = node.kind == 0 ? node.value : null;
    return {
      loc: positionCompensated,
      range: range,
      raw: yaml.slice(range[0], range[1]),
      value: value
    }
  }
  return null;
}
export function parse_yaml(yaml) {
    const ast = load(yaml);
    const src = new StructuredSource(yaml);
    const tr = traverse(ast);

    let rtn = null;
    tr.forEach(function (node) {
      if (typeof(node) == "object" && node != null && node.startPosition >= 0 && node.endPosition >= 0) {
        let lintnode = yamlnode_to_lintnode(src, yaml, node);

        // set key or value
        if (node.key) {
          lintnode = yamlnode_to_lintnode(src, yaml, node.key);
          lintnode.type = 'Comment';
          delete node.key;
        } else {
          lintnode.type = 'Str';
        }
        delete node.parent;
        delete node.errors;

        // create return structure
        if (rtn == null) {
          rtn = {
            type: 'Document',
            loc: lintnode.loc,
            range: lintnode.range,
            raw: lintnode.raw,
            children: []
          }
        } else {
          if (lintnode.value != null) {
            rtn.children.push(lintnode);
          }
        }
      }
    });
    return rtn;
}
