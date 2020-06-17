import { assertEquals,assertStrictEquals } from "https://deno.land/std/testing/asserts.ts";

Deno.test('Equal example',()=>{
    assertEquals(1,1);
})
/**
 * Fails because they are not quite the same
 */
Deno.test({
    name: "Assert Strict Equals", //we are strick equal
    ignore: true,
        fn(){
        assertStrictEquals(1,'1');
    },
})
