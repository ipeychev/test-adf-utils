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

The error is:

```
$ npm i

added 49 packages, and audited 50 packages in 973ms

4 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
$ npm run build

> test-adf-utils@1.0.0 build
> tsc -p tsconfig.build.json

src/index.ts:1:10 - error TS2305: Module '"@atlaskit/adf-utils"' has no exported member 'traverse'.

1 import { traverse } from '@atlaskit/adf-utils';
           ~~~~~~~~


Found 1 error in src/index.ts:1
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