function path()
{
	var args = arguments,
		result = [];

	for(var i = 0; i < args.length; i++)
		result.push(args[i].replace('@', '../Component/Open/syntaxhighlighter_3.0.83/scripts/'));

	return result
};
