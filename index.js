function createSubscribe(name) {
    return {
        next(x) {
            console.log(name, ': ', x);
        },
        error(err) {
            console.log('Error: ', err);
        },
        complete() {
            console.log(name, ' completed');
        }
    }
}


// lesson 5

// function delay(ms = 1000) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     })
// }
//
// // delay().then(() => {
// //    console.log('Promise resolved!');
// // });
//
// const p$ = Rx.Observable.fromPromise(delay(2000));
//
// p$.subscribe(createSubscribe('from Promise'));

// lesson 6

// Rx.Observable.interval()
//     .map(x => x * x)
//     .take(10)
//     .subscribe(createSubscribe('map'));

// Rx.Observable.of('hello', 'world', 'wfm')
//     .map(x => x.toUpperCase())
//     .subscribe(createSubscribe('map'));

// Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
//     // .map(x => x.target.value)
//     .pluck('target', 'value')
//     .map(x => x.toUpperCase())
//     .subscribe(createSubscribe('map'));

// lesson 7

// Rx.Observable.interval(500)
//     // .first()
//     // .last()
//     // .find(x => x === 5)
//     // .findIndex(x => x === 5)
//     // .skip(2)
//     // .skipWhile(x => {
//     //     return typeof x === 'number';
//     // })
//     // .takeWhile(x => x < 7)
//     // .skipUntil(Rx.Observable.timer(3000))
//     .takeUntil(Rx.Observable.timer(3000))
//     .subscribe(createSubscribe('find'));

// lesson 8

// const cars = [
//     {
//         name: 'audi',
//         price: 500
//     },
//     {
//         name: 'bmw',
//         price: 400
//     },
//     {
//         name: 'ford',
//         price: 200
//     }
// ];
//
// // Rx.Observable.range(0, 10)
// //     .filter(x => x > 3)
// //     .subscribe(createSubscribe('filter'));
//
// // Rx.Observable.fromEvent(document.querySelector('input'), 'keyup')
// //     .map(x => x.target.value)
// //     // .debounceTime(1500)
// //     .distinct()
// //     .subscribe(createSubscribe('debounceTime'));
//
// Rx.Observable.from([1,2,3,3,3,5,5,1,1,99,99,2,4,6])
//     .distinctUntilChanged()
//     .subscribe(createSubscribe('debounceTime'));

// lesson 9

// Rx.Observable.interval(500)
//     .bufferTime(2000)
//     .take(4)
//     .subscribe(createSubscribe('bufferTime'));

// Rx.Observable.range(0, 40)
//     .bufferCount(5)
//     .subscribe(createSubscribe('bufferTime'));

// Rx.Observable.interval(1000)
//     .buffer(Rx.Observable.fromEvent(document, 'click'))
//     .subscribe(createSubscribe('buffer'));

// lesson 10

// Rx.Observable.of()
//     .defaultIfEmpty('empty')
//     .subscribe(createSubscribe('defaultIfEmpty'));

// Rx.Observable.from([1,2,3,4,5])
//     .map(x => x * 2)
//     .every(x => x % 2 === 0)
//     .subscribe(createSubscribe('every'));

// Rx.Observable.from([1,2,3,4,5])
//     .do(x => console.log('Before' + x))
//     .subscribe(createSubscribe('do'));

// Rx.Observable.from([1,2,3,4,5])
//     .delay(2000)
//     .subscribe(createSubscribe('delay'));

// Rx.Observable.range(1, 3)
//     .map(x => x + 1)
//     .let(observer => observer.map(x => x * x))
//     .subscribe(createSubscribe('let'));

// lesson 11

// const s1$ = Rx.Observable.of('Hello');
// const s2$ = Rx.Observable.of('World');
// const s3$ = Rx.Observable.of('!');
//
// s1$.merge(s2$).subscribe(createSubscribe('merge'));
//
// Rx.Observable.merge(s1$, s2$, s3$).subscribe(createSubscribe('merge'));

// const s1$ = Rx.Observable.interval(1000).map(x => 'Stream 1: ' + x);
// const s2$ = Rx.Observable.interval(500).map(x => 'Stream 2: ' + x);
//
// Rx.Observable.merge(s1$, s2$)
//     .take(12)
//     .subscribe(createSubscribe('merge'));

// Rx.Observable.range(1, 3)
//     .map(x => Rx.Observable.range(1, 3))
//     .mergeAll()
//     .subscribe(createSubscribe('merge'));

// const s1$ = Rx.Observable.from([1, 2, 3]);
// const s2$ = Rx.Observable.from([4, 5, 6]);
//
// Rx.Observable.concat(s1$, s2$).subscribe(createSubscribe('concat'));

// Rx.Observable.range(1, 3)
//     .map(x => Rx.Observable.range(x, 3))
//     .concatAll()
//     .subscribe(createSubscribe('concatAll'));

// lesson 12

// Rx.Observable.of('Hello')
//     .subscribe(x => {
//         Rx.Observable.of(x + ' World')
//             .subscribe(createSubscribe('mergeMap'));
//     });

// Rx.Observable.of('Hello')
//     .mergeMap(x => Rx.Observable.of(x + ' World'))
//     .subscribe(createSubscribe('mergeMap'));

// const promise = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data + ' wish you good luck!');
//         }, 2000);
//     })
// };
//
// Rx.Observable.of('WFM')
//     .mergeMap((x) => {
//         return promise(x);
//     })
//     .subscribe(createSubscribe(promise));

// Rx.Observable.range(1, 10)
//     .concatMap((x, i) => {
//         return Rx.Observable.interval(100)
//             .take(x)
//             .map(q => i)
//     })
//     .subscribe(createSubscribe('concatMap'));

// lesson 13

// const s1$ = Rx.Observable.of('Hello');
// const s2$ = Rx.Observable.of('World');
//
// Rx.Observable.zip(s1$, s2$.delay(2000)).subscribe(createSubscribe('zip'));

// const interval$ = Rx.Observable.interval(1000);
//
// Rx.Observable.zip(interval$, interval$.take(3), Rx.Observable.of('WFM'))
//     .subscribe(createSubscribe('zip'));

// const int1$ = Rx.Observable.interval(1000);
// const int2$ = Rx.Observable.interval(500);
//
// int1$.withLatestFrom(int2$)
//     .subscribe(createSubscribe('withLatestFrom'));

// const t1$ = Rx.Observable.timer(1000, 2000);
// const t2$ = Rx.Observable.timer(2000, 2000);
// const t3$ = Rx.Observable.timer(3000, 2000);
//
// Rx.Observable.combineLatest(t1$, t2$, t3$)
//     .subscribe(createSubscribe('combineLatest'));

// lesson 14

// Rx.Observable.throw(new Error('Что то пошло не так'))
//     .catch(error => Rx.Observable.of(error))
//     .subscribe(createSubscribe('catch'));
//
// Rx.Observable.interval(500)
//     .take(2)
//     .subscribe(createSubscribe('interval'));

// const s1$ = Rx.Observable.throw(new Error('Что то пошло не так'));
// const s2$ = Rx.Observable.interval(500).take(2);
//
// s1$.onErrorResumeNext(s2$)
//     .subscribe(createSubscribe('onErrorResumeNext'));

// lesson 15

// const subject$ = new Rx.Subject();
//
// subject$.subscribe(createSubscribe('subject'));
// subject$.next(1);

// const subject$ = new Rx.BehaviorSubject('WFM');
// subject$.subscribe(createSubscribe('subject'));
// subject$.next(1);
//
// const subject$ = new Rx.ReplaySubject(2);
//
// subject$.next(1);
// subject$.next(2);
// subject$.next(3);
//
// subject$.subscribe(createSubscribe('subject'));


// const subject$ = new Rx.AsyncSubject();
//
// subject$.next(1);
// subject$.complete();
// subject$.subscribe(createSubscribe('subject'));