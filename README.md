# test-adf-utils

## The purpose of this repo is to demonstrate build failure when using Atlassian's `adf-utils` library

### How to reproduce the error

We can use arbitrary module, e.g. `traverse`:

1. Download/clone the repo
2. Install the dependencies

```
npm i
```

3. Execute the build process

```
npm run build
```


### Note

Tried with different variants of loading `traverse`, from [here](https://atlaskit.atlassian.com/packages/editor/adf-utils):

```
import { traverse } from '@atlaskit/adf-utils';

or

import { traverse } from '@atlaskit/adf-utils/traverse.es';

or

import { traverse } from '@atlaskit/adf-utils/traverse.js';
```

None of them worked.