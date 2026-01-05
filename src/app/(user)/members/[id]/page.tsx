import QRCode from 'qrcode';

interface Props {
  params: {
    id: string;
  };
}

export default async function MemberViewPage({ params }: Props) {
  // Await params
  const { id } = await params;
  

  // Fetch member data (SERVER SIDE)
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}members/${id}`, {
    cache: "no-store", // ALWAYS fetch the latest data
  });

  if (!res.ok) {
    // Handle the case where the fetch fails (not 2xx status)
    return <div>Failed to load member data</div>;
  }

  const result = await res.json();

  // Check if the result is as expected
  const data = result.data;

  if (!result.success || !data) {
    return <div>No member found</div>;
  }

  // Generate QR Code SERVER SIDE
  const urlToEncode = `https://shaktatechnology.com/members/${id}`;
  const qrCode = await QRCode.toDataURL(urlToEncode);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 py-20">
      <div className="bg-white rounded-lg shadow-lg max-w-xl w-full p-6">
        <div className="flex flex-col items-center mb-6">
          <img
            className="rounded-full border-4 border-blue-400"
            src={data.image}
            alt={data.name}
            width={120}
            height={120}
          />
          <h1 className="mt-4 text-2xl font-semibold text-gray-800">{data.name}</h1>
        </div>

        <div className="text-left space-y-4 mb-6">
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-blue-500">Email:</span> {data.email}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-blue-500">Phone:</span> {data.phone}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-blue-500">Department:</span> {data.department}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-blue-500">Position:</span> {data.position}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold text-blue-500">Experience:</span> {data.experience}
          </p>
        </div>

        {/* QR Code Section */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-medium text-gray-800">Scan QR to open this page</h2>
          <img
            src={qrCode}
            alt="QR Code"
            className="mt-4 mx-auto w-40 h-40 object-contain border-2 border-blue-400 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
