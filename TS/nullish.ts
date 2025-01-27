//nullish coalescing

const username: string | null = null;

// Traditional (using ||):
//const safeUsername = username || 'Guest'; // safeUsername will be 'Guest' (undesirable)

// With nullish coalescing:
const safeUsername = username ?? 'Guest'; // safeUsername will be 'Guest'