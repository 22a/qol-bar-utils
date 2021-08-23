// https://github.com/IvyApp/ivy-codemirror#example-ember-modifier-codemirror-implementation

import { action } from '@ember/object';
import { bind } from '@ember/runloop';
import codemirror from 'codemirror';
import Modifier from 'ember-modifier';

import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/selection/active-line';
import 'codemirror/mode/javascript/javascript';

export default class CodeMirrorModifier extends Modifier {
  didInstall() {
    this._setup();
  }

  didUpdateArguments() {
    if (this._editor.getValue() !== this.args.named.content) {
      this._editor.setValue(this.args.named.content);
    }

    this._editor.setOption('readOnly', this.args.named.readOnly);
    this._editor.setOption('mode', this.mode);
  }

  @action
  _onChange(editor, _changeObject) {
    this.args.named.onUpdate(editor.getValue());
  }

  _setup() {
    if (!this.element) {
      throw new Error('CodeMirror modifier has no element');
    }

    const editor = codemirror(this.element, {
      lineNumbers: true,
      matchBrackets: true,
      mode: 'javascript',
      readOnly: this.args.named.readOnly,
      styleActiveLine: true,
      theme: 'material-palenight',
      value: this.args.named.content || '',
      viewportMargin: Infinity,
    });

    editor.on('change', bind(this, this._onChange));

    this._editor = editor;
  }
}
