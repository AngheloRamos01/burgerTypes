export default function Rating({ rating }) {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    if (i < rating + 1) {
      star += "😍";
    } else {
      star += "😵";
    }
  }

  return (
    <div>
      <p>{star}</p>
    </div>
  );
}
