---
title: Benchmarking bun install and sqlite
date: 2023-11-06T14:48:57.755Z
---

## What is bun?

Bun is a new JavaScript runtime that uses Webkit and JavaScript Core unlike Node.js which uses V8. Bun had it's first stable release 2 months ago and it's already on 1.0.9 now. 

## Benchmark Environment

- CPU: 8 cores Intel(R) Xeon(R) Platinum 8275CL CPU @ 3.00GHz
- RAM: 32GB
- OS: Debian 12
- IOPS: 1000
- Volume throughput: 1000
- Node.js: 21.1.0
- npm: 10.2.3
- Bun: 1.0.9

## Benchmark Process

First, let's update apt and install the runtimes.

```sh
sudo apt update
```

```sh
sudo apt install unzip nodejs npm hyperfine
```

This will install Node.js and npm. Now, Let's install bun.

```sh
curl -fsSL https://bun.sh/install | bash
```

and pnpm

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

and Deno

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

don't forget to add deno to your path.

Now, Let's create a new directory

```sh
mkdir test 
cd test
```

Now, I will continue with a `package.json` which will install about 1.5k+ random dependencies. The package.json can be found [here](/assets/blog/bun-bench/package.json).

Before benchmarking let's get rid of the caches

```sh
bun pm cache rm
npm cache clean --force
rm -rf $(pnpm store path)
```

Now let's run the benchmark:

```sh
hyperfine --prepare 'rm -rf node_modules rm -rf bun.lockb rm -rf package-lock.json rm -rf pnpm-lock.yaml sync; echo 3 | sudo tee /proc/sys/vm/drop_caches' 'bun i' 'npm i --no-scripts' 'pnpm i --no-scripts' --export-json output.json --runs 1 --show-output
```

It makes sure to have node_modules, lockfiles deleted and runs on cold cache. 

Here's the summary:

```sh
Summary
  'bun i' ran
    2.36 times faster than 'pnpm i --no-scripts'
   10.64 times faster than 'npm i --no-scripts'
```

Here's a video recording of the benchmark:

<video src="/assets/blog/bun-bench/recording.mp4" controls></video>

Now let's run some other benchmarks. 


### SQLite Benchmark

Move to the parent directory

```sh
cd .. 
mkdir sqlite-benchmark
cd sqlite-benchmark
```

Clone the sqlite folder:

```sh
bunx degit https://github.com/oven-sh/bun/bench/sqlite .
```

Now, install deps

```sh
bun run deps
```

Now, let's run the benchmark:

```sh
bun run bench
```

Here's the result:

```sh
$ bun run bun.js
cpu: Intel(R) Xeon(R) Platinum 8124M CPU @ 3.00GHz
runtime: bun 1.0.9 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
SELECT * FROM "Order"         30.43 ms/iter   (29.74 ms … 32.99 ms)  30.75 ms  32.99 ms  32.99 ms
SELECT * FROM "Product"       72.06 µs/iter    (66.88 µs … 1.25 ms)     70 µs  89.34 µs  99.25 µs
SELECT * FROM "OrderDetail"  341.95 ms/iter (334.57 ms … 356.74 ms) 342.74 ms 356.74 ms 356.74 ms
$ node node.mjs
cpu: Intel(R) Xeon(R) Platinum 8124M CPU @ 3.00GHz
runtime: node v18.13.0 (x64-linux)

benchmark                        time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------------- -----------------------------
SELECT * FROM "Order"        108.83 ms/iter (108.47 ms … 109.25 ms)    109 ms 109.25 ms 109.25 ms
SELECT * FROM "Product"      314.35 µs/iter (309.37 µs … 642.47 µs) 314.31 µs 325.44 µs 327.61 µs
SELECT * FROM "OrderDetail"     2.12 s/iter       (2.04 s … 2.42 s)    2.09 s    2.42 s    2.42 s
```

Bun is 3.5x faster than Nodejs.

## Conclusion

Bun is something that will not just be a drop-in replacement for Node, There's a lot coming up for bun which will change the way we write code. It will also improve [Node](https://twitter.com/WebReflection/status/1719444388122652831). However we should not compare Bun to Golang or Rust, It's a JavaScript runtime and it's meant to be used with JavaScript. Golang and Rust are not meant to be compared to JavaScript. They do their job well and so does JavaScript. They excel in their own domains.

If you liked this post, Consider [following me on x](https://x.com/gaurishhs).