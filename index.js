function Main(cnf, deps) {
  const maxListeners = Math.max(1, ((cnf.queue && cnf.queue.maxListeners) || 10) | 0);

  const { listener, async } = deps;

  return async.queue(listener.listen, maxListeners);
}

Main.Deps = ["async", "listener"];

module.exports = Main;
