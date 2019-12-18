 //array helpers
    //get the last item of array
    lastItemArray(array) {
      return array[array.length - 1];
    }
    
    //perfect clone your array or object (this method dont extend your object)
    cloneValue(value) {
      return JSON.parse(JSON.stringify(value));
    }
