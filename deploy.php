<?php
declare(strict_types=1);

/*
 * Optional single-file deploy target for PHP hosting.
 * This file just redirects to index.html so shared hosting can open the app
 * from a regular web folder without extra routing rules.
 */

header('Location: ./index.html', true, 302);
exit;
