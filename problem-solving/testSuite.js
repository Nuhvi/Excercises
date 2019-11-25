const Green = (msg) => {
  console.log('\x1b[32m%s\x1b[0m', msg);
};

const Success = () => {
  Green('✓ Test Passed');
  return;
};

const Fail = (LHS, RHS) => {
  console.log('\x1b[31m%s\x1b[0m', '  x Test Failed');
  console.log('\x1b[31m%s\x1b[0m', `   Expected: ${RHS}`);
  console.log('\x1b[31m%s\x1b[0m', `   Recieved: ${LHS}`);
  console.log('');
  return;
};

module.exports = {
  assertEquals: (LHS, RHS) => (LHS === RHS ? Success() : Fail(LHS, RHS)),
};
