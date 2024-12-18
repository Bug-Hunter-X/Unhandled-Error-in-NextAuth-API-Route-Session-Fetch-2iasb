```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // ...rest of your API route logic
}
```
This code snippet is part of an API route in Next.js that uses `next-auth` for authentication.  The issue is that the API route might throw an error if there's a problem fetching the session, even before it checks if the session exists.  The error is not explicitly handled, leading to a 500 Internal Server Error instead of a more descriptive 401 Unauthorized error.