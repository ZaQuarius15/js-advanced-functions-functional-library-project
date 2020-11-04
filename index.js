const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      
      for(let i = 0; i < newCollection.length; i++)
         callback(newCollection[i])

      return collection
    },

    // const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
    // const testArr = [1, 2, 3, 4]

    map: function(collection, callback) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)

      const newCollection  = []

      for(let i = 0; i < collection.length; i++)
         newCollection.push(callback(collection[i]))

      return newCollection
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
fi.each()
fi.map()
fi.reduce()
fi.functions()

