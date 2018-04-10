export default {
	node: `struct Node {
  bool promoter;
  bool visited;
  Stack* neighbors;
};`,

  bench: `
Benchmark #1: ./tp0 < entradas/teste_1.txt
  Time (mean ± σ):       1.7 ms ±   1.2 ms    [User: 1.1 ms, System: 0.7 ms]
  Range (min … max):     0.0 ms …   9.0 ms
 
Benchmark #2: ./tp0 < entradas/teste_2.txt
  Time (mean ± σ):       1.5 ms ±   1.0 ms    [User: 1.1 ms, System: 0.6 ms]
  Range (min … max):     0.0 ms …   5.8 ms
 
Benchmark #3: ./tp0 < entradas/teste_3.txt
  Time (mean ± σ):       1.9 ms ±   1.1 ms    [User: 1.2 ms, System: 0.8 ms]
  Range (min … max):     0.3 ms …   5.8 ms
 
Benchmark #4: ./tp0 < entradas/teste_4.txt
  Time (mean ± σ):       4.5 ms ±   1.6 ms    [User: 3.3 ms, System: 1.1 ms]
  Range (min … max):     2.4 ms …  10.6 ms
 
Benchmark #5: ./tp0 < entradas/teste_5.txt
  Time (mean ± σ):      10.3 ms ±   2.4 ms    [User: 8.5 ms, System: 1.6 ms]
  Range (min … max):     7.3 ms …  20.2 ms
 
Benchmark #6: ./tp0 < entradas/teste_6.txt
  Time (mean ± σ):     173.4 ms ±  42.0 ms    [User: 151.6 ms, System: 16.9 ms]
  Range (min … max):   128.7 ms … 263.1 ms
 
Benchmark #7: ./tp0 < entradas/teste_7.txt
  Time (mean ± σ):     395.5 ms ±  60.9 ms    [User: 361.8 ms, System: 28.5 ms]
  Range (min … max):   363.3 ms … 562.1 ms
 
Benchmark #8: ./tp0 < entradas/teste_8.txt
  Time (mean ± σ):     614.9 ms ±  22.6 ms    [User: 567.9 ms, System: 40.9 ms]
  Range (min … max):   598.7 ms … 675.7 ms
 
Benchmark #9: ./tp0 < entradas/teste_9.txt
  Time (mean ± σ):      1.091 s ±  0.035 s    [User: 1.022 s, System: 0.059 s]
  Range (min … max):    1.062 s …  1.156 s
 
Benchmark #10: ./tp0 < entradas/teste_10.txt
  Time (mean ± σ):      3.639 s ±  0.307 s    [User: 3.382 s, System: 0.216 s]
  Range (min … max):    3.375 s …  4.214 s

`
}
