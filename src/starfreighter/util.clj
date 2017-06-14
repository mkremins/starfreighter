(ns starfreighter.util)

(defmacro defcurried
  "Like `defn`, but defines a function to which the first argument can be
  omitted. Calling the resulting function without the first argument will
  return a partial function to which the first argument can later be supplied."
  [name & more]
  (let [[docstring more] (if (string? (first more)) [(first more) (rest more)] [nil more])
        [params & body] more]
    `(defn ~name ~@(when docstring [docstring])
       ([~@(rest params)] #(~name % ~@(rest params)))
       ([~@params] ~@body))))
