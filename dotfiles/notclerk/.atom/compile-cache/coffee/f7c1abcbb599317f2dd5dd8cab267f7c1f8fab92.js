(function() {
  module.exports = {
    view: null,
    activate: function() {
      var _TriggerKey, _command, _commands, _keymap, _linuxSelector, _macSelector, _triggerKey, _windowsSelector;
      this.view = (require('./ColorPicker-view'))();
      _command = 'color-picker:open';
      _triggerKey = (atom.config.get('color-picker.triggerKey')).toLowerCase();
      _TriggerKey = _triggerKey.toUpperCase();
      _macSelector = '.platform-darwin atom-workspace';
      _windowsSelector = '.platform-win32 atom-workspace';
      _linuxSelector = '.platform-linux atom-workspace';
      _keymap = {};
      _keymap["" + _macSelector] = {};
      _keymap["" + _macSelector]["cmd-" + _TriggerKey] = _command;
      _keymap["" + _windowsSelector] = {};
      _keymap["" + _windowsSelector]["ctrl-alt-" + _triggerKey] = _command;
      _keymap["" + _linuxSelector] = {};
      _keymap["" + _linuxSelector]["ctrl-alt-" + _triggerKey] = _command;
      atom.keymaps.add('color-picker:trigger', _keymap);
      atom.contextMenu.add({
        'atom-text-editor': [
          {
            label: 'Color Picker',
            command: _command
          }
        ]
      });
      _commands = {};
      _commands["" + _command] = (function(_this) {
        return function() {
          var ref;
          if (!((ref = _this.view) != null ? ref.canOpen : void 0)) {
            return;
          }
          return _this.view.open();
        };
      })(this);
      atom.commands.add('atom-text-editor', _commands);
      return this.view.activate();
    },
    deactivate: function() {
      var ref;
      return (ref = this.view) != null ? ref.destroy() : void 0;
    },
    provideColorPicker: function() {
      return {
        open: (function(_this) {
          return function(Editor, Cursor) {
            var ref;
            if (!((ref = _this.view) != null ? ref.canOpen : void 0)) {
              return;
            }
            return _this.view.open(Editor, Cursor);
          };
        })(this)
      };
    },
    config: {
      randomColor: {
        title: 'Serve a random color on open',
        description: 'If the Color Picker doesn\'t get an input color, it serves a completely random color.',
        type: 'boolean',
        "default": true
      },
      automaticReplace: {
        title: 'Automatically Replace Color',
        description: 'Replace selected color automatically on change. Works well with as-you-type CSS reloaders.',
        type: 'boolean',
        "default": false
      },
      abbreviateValues: {
        title: 'Abbreviate Color Values',
        description: 'If possible, abbreviate color values, like for example “0.3” to “.3”,  “#ffffff” to “#fff” and “rgb(0, 0, 0)” to “rgb(0,0,0)”.',
        type: 'boolean',
        "default": false
      },
      uppercaseColorValues: {
        title: 'Uppercase Color Values',
        description: 'If sensible, uppercase the color value. For example, “#aaa” becomes “#AAA”.',
        type: 'boolean',
        "default": false
      },
      preferredFormat: {
        title: 'Preferred Color Format',
        description: 'On open, the Color Picker will show a color in this format.',
        type: 'string',
        "enum": ['RGB', 'HEX', 'HSL', 'HSV', 'VEC'],
        "default": 'RGB'
      },
      triggerKey: {
        title: 'Trigger key',
        description: 'Decide what trigger key should open the Color Picker. `CMD-SHIFT-{TRIGGER_KEY}` and `CTRL-ALT-{TRIGGER_KEY}`. Requires a restart.',
        type: 'string',
        "enum": ['C', 'E', 'H', 'K'],
        "default": 'C'
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvY29sb3ItcGlja2VyL2xpYi9Db2xvclBpY2tlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFBQSxNQUFNLENBQUMsT0FBUCxHQUNJO0lBQUEsSUFBQSxFQUFNLElBQU47SUFFQSxRQUFBLEVBQVUsU0FBQTtBQUNOLFVBQUE7TUFBQSxJQUFDLENBQUEsSUFBRCxHQUFRLENBQUMsT0FBQSxDQUFRLG9CQUFSLENBQUQsQ0FBQSxDQUFBO01BQ1IsUUFBQSxHQUFXO01BSVgsV0FBQSxHQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHlCQUFoQixDQUFELENBQTJDLENBQUMsV0FBNUMsQ0FBQTtNQUNkLFdBQUEsR0FBYyxXQUFXLENBQUMsV0FBWixDQUFBO01BR2QsWUFBQSxHQUFlO01BQ2YsZ0JBQUEsR0FBbUI7TUFDbkIsY0FBQSxHQUFpQjtNQUVqQixPQUFBLEdBQVU7TUFHVixPQUFRLENBQUEsRUFBQSxHQUFJLFlBQUosQ0FBUixHQUErQjtNQUMvQixPQUFRLENBQUEsRUFBQSxHQUFJLFlBQUosQ0FBcUIsQ0FBQSxNQUFBLEdBQVEsV0FBUixDQUE3QixHQUF1RDtNQUV2RCxPQUFRLENBQUEsRUFBQSxHQUFJLGdCQUFKLENBQVIsR0FBbUM7TUFDbkMsT0FBUSxDQUFBLEVBQUEsR0FBSSxnQkFBSixDQUF5QixDQUFBLFdBQUEsR0FBYSxXQUFiLENBQWpDLEdBQWdFO01BRWhFLE9BQVEsQ0FBQSxFQUFBLEdBQUksY0FBSixDQUFSLEdBQWlDO01BQ2pDLE9BQVEsQ0FBQSxFQUFBLEdBQUksY0FBSixDQUF1QixDQUFBLFdBQUEsR0FBYSxXQUFiLENBQS9CLEdBQThEO01BRzlELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBYixDQUFpQixzQkFBakIsRUFBeUMsT0FBekM7TUFJQSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQWpCLENBQXFCO1FBQUEsa0JBQUEsRUFBb0I7VUFDckM7WUFBQSxLQUFBLEVBQU8sY0FBUDtZQUNBLE9BQUEsRUFBUyxRQURUO1dBRHFDO1NBQXBCO09BQXJCO01BTUEsU0FBQSxHQUFZO01BQUksU0FBVSxDQUFBLEVBQUEsR0FBSSxRQUFKLENBQVYsR0FBNkIsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO0FBQ3pDLGNBQUE7VUFBQSxJQUFBLGtDQUFtQixDQUFFLGlCQUFyQjtBQUFBLG1CQUFBOztpQkFDQSxLQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBQTtRQUZ5QztNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7TUFHN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLGtCQUFsQixFQUFzQyxTQUF0QztBQUVBLGFBQU8sSUFBQyxDQUFBLElBQUksQ0FBQyxRQUFOLENBQUE7SUExQ0QsQ0FGVjtJQThDQSxVQUFBLEVBQVksU0FBQTtBQUFHLFVBQUE7NENBQUssQ0FBRSxPQUFQLENBQUE7SUFBSCxDQTlDWjtJQWdEQSxrQkFBQSxFQUFvQixTQUFBO0FBQ2hCLGFBQU87UUFDSCxJQUFBLEVBQU0sQ0FBQSxTQUFBLEtBQUE7aUJBQUEsU0FBQyxNQUFELEVBQVMsTUFBVDtBQUNGLGdCQUFBO1lBQUEsSUFBQSxrQ0FBbUIsQ0FBRSxpQkFBckI7QUFBQSxxQkFBQTs7QUFDQSxtQkFBTyxLQUFDLENBQUEsSUFBSSxDQUFDLElBQU4sQ0FBVyxNQUFYLEVBQW1CLE1BQW5CO1VBRkw7UUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBREg7O0lBRFMsQ0FoRHBCO0lBdURBLE1BQUEsRUFFSTtNQUFBLFdBQUEsRUFDSTtRQUFBLEtBQUEsRUFBTyw4QkFBUDtRQUNBLFdBQUEsRUFBYSx1RkFEYjtRQUVBLElBQUEsRUFBTSxTQUZOO1FBR0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxJQUhUO09BREo7TUFNQSxnQkFBQSxFQUNJO1FBQUEsS0FBQSxFQUFPLDZCQUFQO1FBQ0EsV0FBQSxFQUFhLDRGQURiO1FBRUEsSUFBQSxFQUFNLFNBRk47UUFHQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLEtBSFQ7T0FQSjtNQWFBLGdCQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8seUJBQVA7UUFDQSxXQUFBLEVBQWEsZ0lBRGI7UUFFQSxJQUFBLEVBQU0sU0FGTjtRQUdBLENBQUEsT0FBQSxDQUFBLEVBQVMsS0FIVDtPQWRKO01Bb0JBLG9CQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8sd0JBQVA7UUFDQSxXQUFBLEVBQWEsNkVBRGI7UUFFQSxJQUFBLEVBQU0sU0FGTjtRQUdBLENBQUEsT0FBQSxDQUFBLEVBQVMsS0FIVDtPQXJCSjtNQTBCQSxlQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8sd0JBQVA7UUFDQSxXQUFBLEVBQWEsNkRBRGI7UUFFQSxJQUFBLEVBQU0sUUFGTjtRQUdBLENBQUEsSUFBQSxDQUFBLEVBQU0sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsQ0FITjtRQUlBLENBQUEsT0FBQSxDQUFBLEVBQVMsS0FKVDtPQTNCSjtNQWtDQSxVQUFBLEVBQ0k7UUFBQSxLQUFBLEVBQU8sYUFBUDtRQUNBLFdBQUEsRUFBYSxtSUFEYjtRQUVBLElBQUEsRUFBTSxRQUZOO1FBR0EsQ0FBQSxJQUFBLENBQUEsRUFBTSxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxFQUFnQixHQUFoQixDQUhOO1FBSUEsQ0FBQSxPQUFBLENBQUEsRUFBUyxHQUpUO09BbkNKO0tBekRKOztBQURKIiwic291cmNlc0NvbnRlbnQiOlsiIyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jICBDb2xvciBQaWNrZXJcbiMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgbW9kdWxlLmV4cG9ydHMgPVxuICAgICAgICB2aWV3OiBudWxsXG5cbiAgICAgICAgYWN0aXZhdGU6IC0+XG4gICAgICAgICAgICBAdmlldyA9IChyZXF1aXJlICcuL0NvbG9yUGlja2VyLXZpZXcnKSgpXG4gICAgICAgICAgICBfY29tbWFuZCA9ICdjb2xvci1waWNrZXI6b3BlbidcblxuICAgICAgICAjICBTZXQga2V5IGJpbmRpbmdzXG4gICAgICAgICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBfdHJpZ2dlcktleSA9IChhdG9tLmNvbmZpZy5nZXQgJ2NvbG9yLXBpY2tlci50cmlnZ2VyS2V5JykudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgX1RyaWdnZXJLZXkgPSBfdHJpZ2dlcktleS50b1VwcGVyQ2FzZSgpXG5cbiAgICAgICAgICAgICMgVE9ETyB0aGlzIGRvZXNuJ3QgbG9vayB0b28gZ29vZFxuICAgICAgICAgICAgX21hY1NlbGVjdG9yID0gJy5wbGF0Zm9ybS1kYXJ3aW4gYXRvbS13b3Jrc3BhY2UnXG4gICAgICAgICAgICBfd2luZG93c1NlbGVjdG9yID0gJy5wbGF0Zm9ybS13aW4zMiBhdG9tLXdvcmtzcGFjZSdcbiAgICAgICAgICAgIF9saW51eFNlbGVjdG9yID0gJy5wbGF0Zm9ybS1saW51eCBhdG9tLXdvcmtzcGFjZSdcblxuICAgICAgICAgICAgX2tleW1hcCA9IHt9XG5cbiAgICAgICAgICAgICMgTWFjIE9TIFhcbiAgICAgICAgICAgIF9rZXltYXBbXCIjeyBfbWFjU2VsZWN0b3IgfVwiXSA9IHt9XG4gICAgICAgICAgICBfa2V5bWFwW1wiI3sgX21hY1NlbGVjdG9yIH1cIl1bXCJjbWQtI3sgX1RyaWdnZXJLZXkgfVwiXSA9IF9jb21tYW5kXG4gICAgICAgICAgICAjIFdpbmRvd3NcbiAgICAgICAgICAgIF9rZXltYXBbXCIjeyBfd2luZG93c1NlbGVjdG9yIH1cIl0gPSB7fVxuICAgICAgICAgICAgX2tleW1hcFtcIiN7IF93aW5kb3dzU2VsZWN0b3IgfVwiXVtcImN0cmwtYWx0LSN7IF90cmlnZ2VyS2V5IH1cIl0gPSBfY29tbWFuZFxuICAgICAgICAgICAgIyBMaW51eFxuICAgICAgICAgICAgX2tleW1hcFtcIiN7IF9saW51eFNlbGVjdG9yIH1cIl0gPSB7fVxuICAgICAgICAgICAgX2tleW1hcFtcIiN7IF9saW51eFNlbGVjdG9yIH1cIl1bXCJjdHJsLWFsdC0jeyBfdHJpZ2dlcktleSB9XCJdID0gX2NvbW1hbmRcblxuICAgICAgICAgICAgIyBBZGQgdGhlIGtleW1hcFxuICAgICAgICAgICAgYXRvbS5rZXltYXBzLmFkZCAnY29sb3ItcGlja2VyOnRyaWdnZXInLCBfa2V5bWFwXG5cbiAgICAgICAgIyAgQWRkIGNvbnRleHQgbWVudSBjb21tYW5kXG4gICAgICAgICMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICBhdG9tLmNvbnRleHRNZW51LmFkZCAnYXRvbS10ZXh0LWVkaXRvcic6IFtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NvbG9yIFBpY2tlcidcbiAgICAgICAgICAgICAgICBjb21tYW5kOiBfY29tbWFuZF1cblxuICAgICAgICAjICBBZGQgY29sb3ItcGlja2VyOm9wZW4gY29tbWFuZFxuICAgICAgICAjIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAgICAgX2NvbW1hbmRzID0ge307IF9jb21tYW5kc1tcIiN7IF9jb21tYW5kIH1cIl0gPSA9PlxuICAgICAgICAgICAgICAgIHJldHVybiB1bmxlc3MgQHZpZXc/LmNhbk9wZW5cbiAgICAgICAgICAgICAgICBAdmlldy5vcGVuKClcbiAgICAgICAgICAgIGF0b20uY29tbWFuZHMuYWRkICdhdG9tLXRleHQtZWRpdG9yJywgX2NvbW1hbmRzXG5cbiAgICAgICAgICAgIHJldHVybiBAdmlldy5hY3RpdmF0ZSgpXG5cbiAgICAgICAgZGVhY3RpdmF0ZTogLT4gQHZpZXc/LmRlc3Ryb3koKVxuXG4gICAgICAgIHByb3ZpZGVDb2xvclBpY2tlcjogLT5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb3BlbjogKEVkaXRvciwgQ3Vyc29yKSA9PlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5sZXNzIEB2aWV3Py5jYW5PcGVuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBAdmlldy5vcGVuIEVkaXRvciwgQ3Vyc29yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnOlxuICAgICAgICAgICAgIyBSYW5kb20gY29sb3IgY29uZmlndXJhdGlvbjogT24gQ29sb3IgUGlja2VyIG9wZW4sIHNob3cgYSByYW5kb20gY29sb3JcbiAgICAgICAgICAgIHJhbmRvbUNvbG9yOlxuICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VydmUgYSByYW5kb20gY29sb3Igb24gb3BlbidcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lmIHRoZSBDb2xvciBQaWNrZXIgZG9lc25cXCd0IGdldCBhbiBpbnB1dCBjb2xvciwgaXQgc2VydmVzIGEgY29tcGxldGVseSByYW5kb20gY29sb3IuJ1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgICAgICMgQXV0b21hdGljIFJlcGxhY2UgY29uZmlndXJhdGlvbjogUmVwbGFjZSBjb2xvciB2YWx1ZSBvbiBjaGFuZ2VcbiAgICAgICAgICAgIGF1dG9tYXRpY1JlcGxhY2U6XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdBdXRvbWF0aWNhbGx5IFJlcGxhY2UgQ29sb3InXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSZXBsYWNlIHNlbGVjdGVkIGNvbG9yIGF1dG9tYXRpY2FsbHkgb24gY2hhbmdlLiBXb3JrcyB3ZWxsIHdpdGggYXMteW91LXR5cGUgQ1NTIHJlbG9hZGVycy4nXG4gICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgICMgQWJicmV2aWF0ZSB2YWx1ZXMgY29uZmlndXJhdGlvbjogSWYgcG9zc2libGUsIGFiYnJldmlhdGUgY29sb3IgdmFsdWVzLiBFZy4g4oCcMC4z4oCdIHRvIOKAnC4z4oCdXG4gICAgICAgICAgICAjIFRPRE86IENhbiB3ZSBhYmJyZXZpYXRlIHNvbWV0aGluZyBlbHNlP1xuICAgICAgICAgICAgYWJicmV2aWF0ZVZhbHVlczpcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0FiYnJldmlhdGUgQ29sb3IgVmFsdWVzJ1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnSWYgcG9zc2libGUsIGFiYnJldmlhdGUgY29sb3IgdmFsdWVzLCBsaWtlIGZvciBleGFtcGxlIOKAnDAuM+KAnSB0byDigJwuM+KAnSwgIOKAnCNmZmZmZmbigJ0gdG8g4oCcI2ZmZuKAnSBhbmQg4oCccmdiKDAsIDAsIDAp4oCdIHRvIOKAnHJnYigwLDAsMCnigJ0uJ1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICAjIFVwcGVyY2FzZSBjb2xvciB2YWx1ZSBjb25maWd1cmF0aW9uOiBVcHBlcmNhc2UgZm9yIGV4YW1wbGUgSEVYIGNvbG9yIHZhbHVlc1xuICAgICAgICAgICAgIyBUT0RPOiBEb2VzIGl0IG1ha2Ugc2Vuc2UgdG8gdXBwZXJjYXNlIGFueXRoaW5nIG90aGVyIHRoYW4gSEVYIGNvbG9ycz9cbiAgICAgICAgICAgIHVwcGVyY2FzZUNvbG9yVmFsdWVzOlxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVXBwZXJjYXNlIENvbG9yIFZhbHVlcydcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0lmIHNlbnNpYmxlLCB1cHBlcmNhc2UgdGhlIGNvbG9yIHZhbHVlLiBGb3IgZXhhbXBsZSwg4oCcI2FhYeKAnSBiZWNvbWVzIOKAnCNBQUHigJ0uJ1xuICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICAjIFByZWZlcnJlZCBjb2xvciBmb3JtYXQgY29uZmlndXJhdGlvbjogU2V0IHdoYXQgY29sb3IgZm9ybWF0IHRoZSBjb2xvciBwaWNrZXIgc2hvdWxkIGRpc3BsYXkgaW5pdGlhbGx5XG4gICAgICAgICAgICBwcmVmZXJyZWRGb3JtYXQ6XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdQcmVmZXJyZWQgQ29sb3IgRm9ybWF0J1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT24gb3BlbiwgdGhlIENvbG9yIFBpY2tlciB3aWxsIHNob3cgYSBjb2xvciBpbiB0aGlzIGZvcm1hdC4nXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICBlbnVtOiBbJ1JHQicsICdIRVgnLCAnSFNMJywgJ0hTVicsICdWRUMnXVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdSR0InXG4gICAgICAgICAgICAjIFRyaWdnZXIga2V5OiBTZXQgd2hhdCB0cmlnZ2VyIGtleSBvcGVucyB0aGUgY29sb3IgcGlja2VyXG4gICAgICAgICAgICAjIFRPRE8gbW9yZSBvcHRpb25zP1xuICAgICAgICAgICAgdHJpZ2dlcktleTpcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1RyaWdnZXIga2V5J1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGVjaWRlIHdoYXQgdHJpZ2dlciBrZXkgc2hvdWxkIG9wZW4gdGhlIENvbG9yIFBpY2tlci4gYENNRC1TSElGVC17VFJJR0dFUl9LRVl9YCBhbmQgYENUUkwtQUxULXtUUklHR0VSX0tFWX1gLiBSZXF1aXJlcyBhIHJlc3RhcnQuJ1xuICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgZW51bTogWydDJywgJ0UnLCAnSCcsICdLJ11cbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnQydcbiJdfQ==
