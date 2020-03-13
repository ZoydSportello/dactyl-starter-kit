# Placeholder Tutorial

[Tutorials](tutorials.html) are step-by-step instructions for how to complete a task.

## Prerequisites

To complete this tutorial, you must meet the following prerequisites:

- Can read English.

- Can think abstractly.

    Abstract thinking involves the ability to map concepts to a variety of applicable situations and cases.

## Steps

<!-- This "cycler" system is not necessary, but may be convenient so you don't
have to carefully keep track of step numbers. -->
{% set n = cycler(* range(1,99)) %}

### {{n.next()}}. Do the first step.

Detailed instructions for the step go here.

```text
Simple code sample
```

### {{n.next()}}. Do this next.

More detailed instructions. Might include multi-code tabs.

<!-- MULTICODE_BLOCK_START -->

*JavaScript*

```js
console.log("Hello world!");
```

*Python*

```py
print("Hello world!")
```

*C++*

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello world!";
    return 0;
}
```

<!-- MULTICODE_BLOCK_END -->
