(function() {
  describe("Clean UI theme", function() {
    beforeEach(function() {
      return waitsForPromise(function() {
        return atom.packages.activatePackage('pristine-ui');
      });
    });
    it("allows the font size to be set via config", function() {
      expect(document.documentElement.style.fontSize).toBe('');
      atom.config.set('pristine-ui.fontSize', '10');
      expect(document.documentElement.style.fontSize).toBe('10px');
      atom.config.set('pristine-ui.fontSize', 'Auto');
      return expect(document.documentElement.style.fontSize).toBe('');
    });
    it("allows the layout mode to be set via config", function() {
      expect(document.documentElement.getAttribute('theme-pristine-ui-layoutmode')).toBe('auto');
      atom.config.set('pristine-ui.layoutMode', 'Spacious');
      return expect(document.documentElement.getAttribute('theme-pristine-ui-layoutmode')).toBe('spacious');
    });
    return it("allows the tab sizing to be set via config", function() {
      expect(document.documentElement.getAttribute('theme-pristine-ui-tabsizing')).toBe('auto');
      atom.config.set('pristine-ui.tabSizing', 'Minimum');
      return expect(document.documentElement.getAttribute('theme-pristine-ui-tabsizing')).toBe('minimum');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL2hvbWUvbm90Y2xlcmsvLmF0b20vcGFja2FnZXMvcHJpc3RpbmUtdWkvc3BlYy90aGVtZS1zcGVjLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLFFBQUEsQ0FBUyxnQkFBVCxFQUEyQixTQUFBO0lBQ3pCLFVBQUEsQ0FBVyxTQUFBO2FBQ1QsZUFBQSxDQUFnQixTQUFBO2VBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFkLENBQThCLGFBQTlCO01BRGMsQ0FBaEI7SUFEUyxDQUFYO0lBSUEsRUFBQSxDQUFHLDJDQUFILEVBQWdELFNBQUE7TUFDOUMsTUFBQSxDQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQXRDLENBQStDLENBQUMsSUFBaEQsQ0FBcUQsRUFBckQ7TUFFQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCLEVBQXdDLElBQXhDO01BQ0EsTUFBQSxDQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQXRDLENBQStDLENBQUMsSUFBaEQsQ0FBcUQsTUFBckQ7TUFFQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0Isc0JBQWhCLEVBQXdDLE1BQXhDO2FBQ0EsTUFBQSxDQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQXRDLENBQStDLENBQUMsSUFBaEQsQ0FBcUQsRUFBckQ7SUFQOEMsQ0FBaEQ7SUFTQSxFQUFBLENBQUcsNkNBQUgsRUFBa0QsU0FBQTtNQUNoRCxNQUFBLENBQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUF6QixDQUFzQyw4QkFBdEMsQ0FBUCxDQUE2RSxDQUFDLElBQTlFLENBQW1GLE1BQW5GO01BRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHdCQUFoQixFQUEwQyxVQUExQzthQUNBLE1BQUEsQ0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQXpCLENBQXNDLDhCQUF0QyxDQUFQLENBQTZFLENBQUMsSUFBOUUsQ0FBbUYsVUFBbkY7SUFKZ0QsQ0FBbEQ7V0FNQSxFQUFBLENBQUcsNENBQUgsRUFBaUQsU0FBQTtNQUMvQyxNQUFBLENBQU8sUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUF6QixDQUFzQyw2QkFBdEMsQ0FBUCxDQUE0RSxDQUFDLElBQTdFLENBQWtGLE1BQWxGO01BRUEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLHVCQUFoQixFQUF5QyxTQUF6QzthQUNBLE1BQUEsQ0FBTyxRQUFRLENBQUMsZUFBZSxDQUFDLFlBQXpCLENBQXNDLDZCQUF0QyxDQUFQLENBQTRFLENBQUMsSUFBN0UsQ0FBa0YsU0FBbEY7SUFKK0MsQ0FBakQ7RUFwQnlCLENBQTNCO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSBcIkNsZWFuIFVJIHRoZW1lXCIsIC0+XG4gIGJlZm9yZUVhY2ggLT5cbiAgICB3YWl0c0ZvclByb21pc2UgLT5cbiAgICAgIGF0b20ucGFja2FnZXMuYWN0aXZhdGVQYWNrYWdlKCdwcmlzdGluZS11aScpXG5cbiAgaXQgXCJhbGxvd3MgdGhlIGZvbnQgc2l6ZSB0byBiZSBzZXQgdmlhIGNvbmZpZ1wiLCAtPlxuICAgIGV4cGVjdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUpLnRvQmUgJydcblxuICAgIGF0b20uY29uZmlnLnNldCgncHJpc3RpbmUtdWkuZm9udFNpemUnLCAnMTAnKVxuICAgIGV4cGVjdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUpLnRvQmUgJzEwcHgnXG5cbiAgICBhdG9tLmNvbmZpZy5zZXQoJ3ByaXN0aW5lLXVpLmZvbnRTaXplJywgJ0F1dG8nKVxuICAgIGV4cGVjdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuZm9udFNpemUpLnRvQmUgJydcblxuICBpdCBcImFsbG93cyB0aGUgbGF5b3V0IG1vZGUgdG8gYmUgc2V0IHZpYSBjb25maWdcIiwgLT5cbiAgICBleHBlY3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtcHJpc3RpbmUtdWktbGF5b3V0bW9kZScpKS50b0JlICdhdXRvJ1xuXG4gICAgYXRvbS5jb25maWcuc2V0KCdwcmlzdGluZS11aS5sYXlvdXRNb2RlJywgJ1NwYWNpb3VzJylcbiAgICBleHBlY3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgndGhlbWUtcHJpc3RpbmUtdWktbGF5b3V0bW9kZScpKS50b0JlICdzcGFjaW91cydcblxuICBpdCBcImFsbG93cyB0aGUgdGFiIHNpemluZyB0byBiZSBzZXQgdmlhIGNvbmZpZ1wiLCAtPlxuICAgIGV4cGVjdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1wcmlzdGluZS11aS10YWJzaXppbmcnKSkudG9CZSAnYXV0bydcblxuICAgIGF0b20uY29uZmlnLnNldCgncHJpc3RpbmUtdWkudGFiU2l6aW5nJywgJ01pbmltdW0nKVxuICAgIGV4cGVjdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aGVtZS1wcmlzdGluZS11aS10YWJzaXppbmcnKSkudG9CZSAnbWluaW11bSdcbiJdfQ==
