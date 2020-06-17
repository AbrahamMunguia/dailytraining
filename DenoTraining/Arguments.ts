console.log(Deno.args[0])
if (Deno.args.includes('abraham')) {
  console.log('Abraham was indeed included...')
} else {
  console.log('Anything but abraham was included')
}