const pddikti = async (nim, password) => {
	const resElearning = await fetch("https://e-learning.unitomo.ac.id/login/proses", {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		},
		body: `username=${nim}&password=${password}`,
		method: "POST",
	});

	const dataElearning = await resElearning.json();
	if (!dataElearning.success)
		return dataElearning.message.includes("aktif")
			? {
					status: false,
					message: `NIM (${nim}) tidak terdaftar di UNIVERSITAS UNITOMO.`,
				}
			: {
					status: false,
					message: `NIM atau Password yang anda masukkan salah.`,
				};
	const checkPddikti = await fetch(`https://api-frontend.kemdikbud.go.id/hit_mhs/${nim}`);
	const checkPddiktiJson = await checkPddikti.json();
	const link = checkPddiktiJson.mahasiswa[0]["website-link"].split("/")[2];
	const getData = await fetch(`https://api-frontend.kemdikbud.go.id/detail_mhs/${link}`);
	const result = await getData.json();

	return {
		jenis_pendaftaran: result.dataumum.nm_jns_daftar,
		nama: result.dataumum.nm_pd,
		jenis_kelamin: result.dataumum.jk === "L" ? "Laki-Laki" : "Perempuan",
		nim: result.dataumum.nipd,
		universitas: result.dataumum.namapt,
		program_studi: result.dataumum.namaprodi,
		jenjang: result.dataumum.namajenjang,
		tahun_masuk: result.dataumum.mulai_smt.slice(0, 4),
		status_kuliah: result.datastatuskuliah.map((data, index) => {
			const mataKuliah = result.datastudi
				.filter((matkul) => matkul.id_smt === data.id_smt)
				.map((matkul) => ({
					kode: matkul.kode_mk,
					nama_mk: matkul.nm_mk,
					sks: matkul.sks_mk,
				}));

			return {
				semester: index + 1,
				tahun: data.id_smt.slice(0, 4),
				sks_diambil: data.sks_smt,
				status: data.nm_stat_mhs,
				matakuliah: mataKuliah,
			};
		}),
	};
};
/* const pddikti = async (nim, password) => {
	const response = await axios.post("https://e-learning.unitomo.ac.id/login/proses", new URLSearchParams(`username=${nim}&password=${password}`), {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		},
		method: "POST",
	});

	const data = response.data;
	if (!data.success) return data;
	const checkPddikti = await axios.get(`https://api-frontend.kemdikbud.go.id/hit_mhs/${nim}`);
	const link = checkPddikti.data.mahasiswa[0]["website-link"].split("/")[2];
	const result = await axios.get(`https://api-frontend.kemdikbud.go.id/detail_mhs/${link}`);

	return {
		jenis_pendaftaran: result.data.dataumum.nm_jns_daftar,
		nama: result.data.dataumum.nm_pd,
		jenis_kelamin: result.data.dataumum.jk === "L" ? "Laki-Laki" : "Perempuan",
		nim: result.data.dataumum.nipd,
		universitas: result.data.dataumum.namapt,
		program_studi: result.data.dataumum.namaprodi,
		jenjang: result.data.dataumum.namajenjang,
		tahun_masuk: result.data.dataumum.mulai_smt.slice(0, 4),
		// status_kuliah: result.data.datastatuskuliah.map((data, index) => {
		// 	const mataKuliah = result.data.datastudi
		// 		.filter((matkul) => matkul.id_smt === data.id_smt)
		// 		.map((matkul) => ({
		// 			kode: matkul.kode_mk,
		// 			nama_mk: matkul.nm_mk,
		// 			sks: matkul.sks_mk,
		// 		}));

		// 	return {
		// 		semester: index + 1,
		// 		tahun: data.id_smt.slice(0, 4),
		// 		sks_diambil: data.sks_smt,
		// 		status: data.nm_stat_mhs,
		// 		matakuliah: mataKuliah,
		// 	};
		// }),
	};
}; */

module.exports = { pddikti };
