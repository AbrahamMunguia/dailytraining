import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { delay } from "https://deno.land/std/async/delay.ts";

/**
 * Assert Equals 
 */
Deno.test("hello world",()=>{
    const x = 1 + 2;
    assertEquals(x,3);
})

/**
 * Async
 */
Deno.test("async hello world",async ()=>{
    const y = 1 + 2;
    await delay(1000);
    if(y != 3){
        throw console.error("x should be equal to 3");
    }
})

