import { parseISO, format } from 'date-fns'

const Date = ({ dateString }) => {
	console.log(dateString);
  	const date = parseISO(dateString);
  	console.log(date);

	return (
		<time dateTime={dateString}>
			{format(date,'LLLL d, yyyy')}
		</time>
	)

}

export default Date;