function greet(name?: string): string {
  return name? `Hello, ${name}!` : 'Hello, world!';
}

export {
  greet,
};
