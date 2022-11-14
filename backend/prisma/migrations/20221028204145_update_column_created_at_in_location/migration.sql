-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_locations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,
    CONSTRAINT "locations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "locations_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_locations" ("created_at", "id", "place_id", "user_id") SELECT "created_at", "id", "place_id", "user_id" FROM "locations";
DROP TABLE "locations";
ALTER TABLE "new_locations" RENAME TO "locations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
