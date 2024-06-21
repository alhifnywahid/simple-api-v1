const axios = require("axios");

const pddikti = async (nim, password) => {
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
};

module.exports = { pddikti };
