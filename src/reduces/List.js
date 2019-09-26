var initialState =
  [
    {
      name: 'Air', url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABKCAYAAAAc0MJxAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADg0lEQVR4nO2aT0gVURTGz5n3MIQgEILojylZUpuKICqDUJAkF1EUBW2CwEW0iBZR0KZFFLUsCIRWQrQIhUBq0V94GEmLKFwYoVkahRAEQmlv7unMvDe++8aZO/ICN34/ed47d+Z+97wzi/tx7iMCAAAAAAAAAAAAAGDp4FonjvyQMSFq1g9JNChWvzL+m33auX0dj7r03n6Tfp1wJJovlkCC5vE96/mhS68wIZf0211PiYnEGjRE19qb+IpLL++66cJn6vWklKhodZP0oNBc3tB0lp5KDOi/aUtuHra19WbRow9Zeiw0rE2vHZOJBRmt4zE9z9IDAAAAlg+ZPur9D7mgnuOmdnPBdZJnKlsEX587v2sd33HpvZmUbm0e6GelJbVAM8AI3W1r5LMuvaGv0lL0aUi/yWrbG6X4sNftzbzPpZdGpo/SxT/pQvcWjFspZlOyJ/pxmsrwWaIpbe5H16GtSfFh6oXeZekV8/RLjHqwBH9krRnd/p6lBwAAAICa61Fvp6Rft+HG+QGp3t4tbzRXzNHJ/Wv5i0uvMCGBV+uI144kvteXuHigiZ2lkWfjclptwzl7zC7V2B5Qk9B7sIV7XXo116N0gTn7IjFJ5efqZq1nU9D5M9FbSyqu2TeKQjOZ8cWeSUtSGLtkxwcAAAAsHzJ91PCk+hGq+JGkM7Kwb8It+UbbRvd528vPstdjup209cctBjMNtDfxNZfei3FZ89ev1LfSzxkl+Bs9tDl3yqWXxmJ8VH0UgLV+pW9/O64U49LQN1O/mCQF+IZWZenNcRhfXdXcqoKdXc3j+iw9AAAAANRcjypMyFXdeNcE/fmtPeXI6E+eLndt4J8uvaefpEc82rXghqnImsr13e4t7DzKGvwonSLmWOJPkWLxke89OryNB116/1OP6tJmd7nwVaodcaLZm14xS7e0dSYqTJJQT3lqlReKNFnC88SZnNAjvXQmygi16owzGlIu9YdupQvfcHge6UwUAAAAsHzI9FGvPkuH7qkngn7yEVvF5/iG+jo3ccGl93hMWvOGLsS9UVwttAXsFbo3c59L78mINPzNm8DT1VXFZ6pjC1omb/zoVr7h0ktjMT6qQ1focf1APqoveUTj2jgT5RnaoUH3xLzRvJpE7y4YF2nQnjNRszlazcJnpFw3o3I88RhLXk+C+GpKFAAAAAAAAAAAAAAAS8k/jQtvqi8eK+UAAAAASUVORK5CYII='
    },
    {
      name: 'Earth', url: 'data:image/png;base64,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'
    },
    {
      name: 'Fire', url: 'data:image/png;base64,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'
    },
    {
      name: 'Water', url: 'data:image/png;base64,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'
    },
  ]

var myReducer = (state = initialState, action) => {
  return state;
}

export default myReducer;