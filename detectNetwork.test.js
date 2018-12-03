/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num%2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var should = chai.should();

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should = chai.should;
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011111111111111').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function() {
    detectNetwork('6011111111111111111').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6444444444444444').should.equal('Discover');
  });
  it('has a prefix of 644 and a length of 19', function() {
    detectNetwork('6444444444444444444').should.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6454444444444444').should.equal('Discover');
  });
  it('has a prefix of 645 and a length of 19', function() {
    detectNetwork('6454444444444444444').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6464444444444444').should.equal('Discover');
  });
  it('has a prefix of 646 and a length of 19', function() {
    detectNetwork('6464444444444444444').should.equal('Discover');
  });  
  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6474444444444444').should.equal('Discover');
  });
  it('has a prefix of 647 and a length of 19', function() {
    detectNetwork('6474444444444444444').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6484444444444444').should.equal('Discover');
  });
  it('has a prefix of 648 and a length of 19', function() {
    detectNetwork('6484444444444444444').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6494444444444444').should.equal('Discover');
  });
  it('has a prefix of 649 and a length of 19', function() {
    detectNetwork('6494444444444444444').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6504444444444444').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function() {
    detectNetwork('6504444444444444444').should.equal('Discover');
  });  
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var should = chai.should();
  
  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501844444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 13', function() {
    detectNetwork('5018444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 14', function() {
    detectNetwork('50184444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 15', function() {
    detectNetwork('501844444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 16', function() {
    detectNetwork('5018444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 17', function() {
    detectNetwork('50184444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 18', function() {
    detectNetwork('501844444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5018 and a length of 19', function() {
    detectNetwork('5018444444444444444').should.equal('Maestro');
  });  
  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502044444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 13', function() {
    detectNetwork('5020444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 14', function() {
    detectNetwork('50204444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 15', function() {
    detectNetwork('502044444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 16', function() {
    detectNetwork('5020444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 17', function() {
    detectNetwork('50204444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 18', function() {
    detectNetwork('502044444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5020 and a length of 19', function() {
    detectNetwork('5020444444444444444').should.equal('Maestro');
  });  
  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503844444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 13', function() {
    detectNetwork('5038444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 14', function() {
    detectNetwork('50384444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 15', function() {
    detectNetwork('503844444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 16', function() {
    detectNetwork('5038444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 17', function() {
    detectNetwork('50384444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 18', function() {
    detectNetwork('503844444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 5038 and a length of 19', function() {
    detectNetwork('5038444444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 13', function() {
    detectNetwork('6304444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 14', function() {
    detectNetwork('63044444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 15', function() {
    detectNetwork('630444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 16', function() {
    detectNetwork('6304444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 17', function() {
    detectNetwork('63044444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 18', function() {
    detectNetwork('630444444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6304 and a length of 19', function() {
    detectNetwork('6304444444444444444').should.equal('Maestro');
  });  
});

describe('should support China UnionPay' function(){
  var should = chai.should();

  it('has a prefix of 622126 and a length of 16', function() {
    detectNetwork('6221264444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 622127 and a length of 17', function() {
    detectNetwork('62212744444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 622199 and a length of 18', function() {
    detectNetwork('622199444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 622900 and a length of 19', function() {
    detectNetwork('6229004444444444444').should.equal('China UnionPay');
  }); 
      it('has a prefix of 624 and a length of 16', function() {
    detectNetwork('6244444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 625 and a length of 17', function() {
    detectNetwork('62544444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 624 and a length of 18', function() {
    detectNetwork('624444444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 626 and a length of 19', function() {
    detectNetwork('6264444444444444444').should.equal('China UnionPay');
  }); 
  it('has a prefix of 6282 and a length of 16', function() {
    detectNetwork('6282444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 6284 and a length of 17', function() {
    detectNetwork('62844444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 6286 and a length of 18', function() {
    detectNetwork('628644444444444444').should.equal('China UnionPay');
  });  
    it('has a prefix of 6288 and a length of 19', function() {
    detectNetwork('6288444444444444444').should.equal('China UnionPay');
  }); 

});
describe('should support Switch', function() {

  var should = chai.should();

  it('has a prefix of 4903 and a length of 16', function() {
    detectNetwork('4903444444444444').should.equal('Maestro');
  });
    it('has a prefix of 4903 and a length of 18', function() {
    detectNetwork('490344444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 4903 and a length of 19', function() {
    detectNetwork('4903444444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 4905 and a length of 16', function() {
    detectNetwork('4905444444444444').should.equal('Maestro');
  });
    it('has a prefix of 4905 and a length of 18', function() {
    detectNetwork('490544444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 4905 and a length of 19', function() {
    detectNetwork('4905444444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 4911 and a length of 16', function() {
    detectNetwork('4911444444444444').should.equal('Maestro');
  });
    it('has a prefix of 4911 and a length of 18', function() {
    detectNetwork('491144444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 4911 and a length of 19', function() {
    detectNetwork('4911444444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 4936 and a length of 16', function() {
    detectNetwork('4936444444444444').should.equal('Maestro');
  });
    it('has a prefix of 4936 and a length of 18', function() {
    detectNetwork('493644444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 4936 and a length of 19', function() {
    detectNetwork('4936444444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 6333 and a length of 16', function() {
    detectNetwork('6333444444444444').should.equal('Maestro');
  });
    it('has a prefix of 6333 and a length of 18', function() {
    detectNetwork('633344444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6333 and a length of 19', function() {
    detectNetwork('6333444444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 6759 and a length of 16', function() {
    detectNetwork('6759444444444444').should.equal('Maestro');
  });
    it('has a prefix of 6759 and a length of 18', function() {
    detectNetwork('675944444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 6759 and a length of 19', function() {
    detectNetwork('6759444444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 564182 and a length of 16', function() {
    detectNetwork('5641824444444444').should.equal('Maestro');
  });
    it('has a prefix of 564182 and a length of 18', function() {
    detectNetwork('564182444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 564182 and a length of 19', function() {
    detectNetwork('5641824444444444444').should.equal('Maestro');
  }); 
  it('has a prefix of 633110 and a length of 16', function() {
    detectNetwork('6331104444444444').should.equal('Maestro');
  });
    it('has a prefix of 633110 and a length of 18', function() {
    detectNetwork('633110444444444444').should.equal('Maestro');
  });  
    it('has a prefix of 633110 and a length of 19', function() {
    detectNetwork('6331104444444444444').should.equal('Maestro');
  }); 
});
