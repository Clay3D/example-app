<!DOCTYPE html>
<html>
<head>
	<title>Test View</title>
</head>
<body>
	My Test view
<form method="POST" action="/test-route">
    @csrf
    <input type="text" name="name">
    <input type="text" name="email">
    <input type="text" name="password">
    <button type="submit">submit</button>
</form>

</body>
</html>