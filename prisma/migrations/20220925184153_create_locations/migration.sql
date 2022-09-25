-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "place_id" TEXT NOT NULL,
    CONSTRAINT "locations_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "locations_place_id_fkey" FOREIGN KEY ("place_id") REFERENCES "places" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
